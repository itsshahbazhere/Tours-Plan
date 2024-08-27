import Card from "./Card";

function Tours({tours, removeTour}){

    return(
        <div className="container">
            <div>
                <h2 className="title">Plan with Shahbaz</h2>
            </div>
            <div className="cards">
                {
                    tours.map( (tour)=>{
                        return <Card key = {tour.id} {...tour} removeTour = {removeTour}></Card>
                    })
                }
            </div>

            <footer className="footer">
                <p>&copy; 2024 Shahbaz. All rights reserved.</p>
            </footer>
        </div>
        
    );


}

export default Tours;