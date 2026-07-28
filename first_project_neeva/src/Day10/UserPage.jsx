import "./UserStyle.css"

let users =[
    {
        id:1001,
        fullname :"Aayush Shilpakar",
        age: 20,
        address:"Bkt",
        phone:9876537667,
        status:"active",
    },
    {
        id:1002,
       fullname :"Maayush Shilpakar",
        age: 22,
        address:"pokhara",
        phone:98787335680,
        status:"inactive", 
    }
]
let UserPage =()=>{
    return(
        <div className="userContainer">
            <h2>User Page</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ratione sed animi numquam voluptatum hic sit quo a asperiores sequi!</p>
       <div className="userCardSection">
        {/*user list*/}
        {
            users.map((ele,i)=>{
                return(
                    <div key={`${ele.fullname}-${ele.id}`} className="userCard">
                        <h4>Full Name:<span>{ele.fullname}</span></h4>
                        <b>Age: {ele.age} | Address: {ele.address}</b>
                        <p>Contact: {ele.phone}</p>
                        <div className="userStatus">
                            {ele.status}
                            </div>
                        </div>
                
                )

            })
        }

       </div>
        </div>

    
    )
}
export default UserPage