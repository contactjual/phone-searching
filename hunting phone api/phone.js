const loadPhone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    const data = await res.json();
    phones = data.data;
    displayPhones(phones);
}



const displayPhones = phones => {
    // console.log(phones);

    const phoneContainer = document.getElementById('phone-container')

    phones.forEach(phone => {
        console.log(phone);
        // create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = 'card bg-gray-100 p-4 shadow-xl';
        // set inner text
        phoneCard.innerHTML = `
            <figure>
                <img src="${phone.image}"
                            alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        `
        // append child
        phoneContainer.appendChild(phoneCard);
    })
}


// handle search button 
const handleSearch = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    
}


loadPhone();