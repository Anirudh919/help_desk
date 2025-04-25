import toast from "react-hot-toast";


export function useLogout(){


    
const logoutUser = async () => {
    try {
      const response = await fetch('api/auth/logout', {
        method: 'POST',
        credentials: 'include', // ⬅️ required to include cookies in the request
      });
  
      const data = await response.json();
  
      if (data.success) {
    //     console.log('Logout successful:', data.message);
    toast.success(data.message)
    //     // Optionally redirect or update UI
      } else {
        console.error( data.message);
        toast.error(data.message)

      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };
  return{
    logoutUser
  }

}




