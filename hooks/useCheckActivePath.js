import { useRouter } from "next/router"


export const useCheckActivePath = () => {
    const router = useRouter()
  
    const isActivePath = (path) => {
      if(router.pathname.includes(path)){
        return true
      }else {
        return null
      }
    }

    return {isActivePath}
}