const Home = () => {

    const handleClick = () =>{
        console.log("Button Clicked !! ");
    }

    const handleClickAsgain = (name) =>{
        console.log('hello '+ name)
    }

    return ( 
        <div className="home">
            <h2>Home page</h2>
            <button onClick={handleClick}>Click me!</button>
            <button onClick={()=> handleClickAsgain('Himel')}>Click me again!</button>
        </div>
     );
}
 
export default Home;