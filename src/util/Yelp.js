const apiKey =
  "3k3Y54trXwmaoK1lzBqusQdC8re4WBtk_V0J8WbNPka3GnsdoCUpEPTjG9fxpMS_IgltNf3fmoIDKN4st3_J0_uPf96FBUTEwwe5OvrG0o9fZiyExbFVOPS5nhDyXXYx";
const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      { headers: { Authorization: `Bearer ${apiKey}` } }
    )
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_Code,
            category: business.category[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }));
        }
      });
  }
};
export default Yelp;
