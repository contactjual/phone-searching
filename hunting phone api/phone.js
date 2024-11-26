const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    phones = data.data;
    displayPhones(phones);
}



const displayPhones = phones => {
    // console.log(phones);

    const phoneContainer = document.getElementById('phone-container')

    // clear phoneContainer after searchig again.
    phoneContainer.textContent = '';

    // display show all button if there are more than 12 phones
    const showAllContainer = document.getElementById('show-all-container');
    if (phones.length > 12) {
        showAllContainer.classList.remove('hidden');
    }
    else {
        showAllContainer.classList.add('hidden')
    }


    // display only first 12 phones
    phones = phones.slice(0, 12);

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
    });

    // hide loader 
    toggleLoadingSpinner(false);
}


// handle search button 
const handleSearch = () => {
    toggleLoadingSpinner(true); // showing loader
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhone(searchText)
}


// loader
const toggleLoadingSpinner = (isLoading) => {
    const leadingSpinner = document.getElementById('leading-spinner');
    if (isLoading) {
        leadingSpinner.classList.remove('hidden')
    }
    else {
        leadingSpinner.classList.add('hidden')
    }
}




loadPhone();