const container = document.querySelector('.container');

const fetchData = () => {
    try {
        fetch('https://example-data.draftbit.com/restaurants')
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                container.innerHTML = data.map((restaurant) => (
                    ` <div>
                    <div class="card-restaurant">
                        <div class="card-restaurant-heading">
                            <h2>${restaurant.name}</h2>
                        </div>

                        <img  class="img"  src="${restaurant.image}" alt="image" />

                        <div class="card-restaurant-details" >
                            <div class="country">
                                <p><span> <i class="fa-solid fa-flag"></i> </span>Country:${restaurant.country}</p>
                            </div>
                            <div class="phone">
                                <p><span> <i class="fa-solid fa-phone"></i> </span>Phone:${restaurant.phone}</p>
                            </div>
                            <div class="address">
                                <p><span> <i class="fa-solid fa-house"></i> </span>Address:${restaurant.address}</p>
                            </div>
                            <div class="website">
                                 <a href=${restaurant.website} target="_blank" >Visit the website</a> 
                            </div>
                        </div>
                        </div>
                    </div>`
                ))
            })
    } catch (e) {
        console.log(e);
    }
}

fetchData();