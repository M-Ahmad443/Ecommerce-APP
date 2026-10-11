import { useSelector } from 'react-redux'



const Home = () => {
    const result = useSelector(state => state.auth)
    
    return (
        <section className='home'>





            ( if(result.message){
                <h4>{result?.message || result?.error}</h4>

            })


           
              <h2 className="response">  Name:{result?.user?.name}</h2>
              <h2 className="response">Email :{result?.user?.email}</h2>
              <h2 className="response">password:{result?.user?.password}</h2>
            




        </section>
    )
}

export default Home