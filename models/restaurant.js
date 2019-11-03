class Restaurant {
  constructor(
    id,
    name,
    category,
    imageUrl,
    tel,
    address,
    budget,
    description,
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.imageUrl = imageUrl;
    this.tel = tel;
    this.address = address;
    this.budget = budget;
    this.description = description;
  }
}

export default Restaurant;