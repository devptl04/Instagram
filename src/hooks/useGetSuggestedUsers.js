import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore';
import {useEffect, useState} from 'react'
import { firestore } from '../firebase/firebase';
import useAuthStore from '../store/authStore';
import useShowToast from './useShowToast';

const useGetSuggestedUsers = () => {
    const [isLoading, setIsLoading] = useState(true);
    const authUser = useAuthStore((store) => store.user);
    const showToast = useShowToast();
    const [suggestedUsers, setSuggestedUsers] = useState([])

    useEffect(() => {
        const getSuggestedUsers = async () => {
            setIsLoading(true);
            try{
                const usersRef = collection(firestore, "users")
                const q = query(
                    usersRef,
                    where("uid", "not-in", [authUser.uid, ...authUser.following]),
                    orderBy("uid"),
                    limit(3)
                )

                const querySnapshot = await getDocs(q);
                const users = [];
                querySnapshot.forEach(doc => {
                    users.push({...doc.data(), id: doc.id})
                })
                setSuggestedUsers(users);

            }catch(error){
                showToast("Error", error.message, "error");
            }finally{
                setIsLoading(false);
            }
        }
        if (authUser) getSuggestedUsers()
    }, [authUser, showToast])

    return {isLoading, suggestedUsers}
}

export default useGetSuggestedUsers
