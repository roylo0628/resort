import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from './Title';

// get all unique value
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
}

export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context

  // get unique type
  let types = getUnique(rooms, 'type');
  // add all
  types = ['all', ...types]
  // map to jsx
  types = types.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
  })

  // capacity
  let people = getUnique(rooms, 'capacity');
  people = people.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
  })

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* {Room Type} */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}>
            {types}
          </select>
        </div>
        {/* {End of Room Type} */}
        {/* {Guests} */}
        <div className="form-group">
          <label htmlFor="type">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}>
            {people}
          </select>
        </div>
        {/* {End of Guests} */}
        {/* {Room Price} */}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            id="price"
            type="range"
            name="price"
            className="form-control"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={handleChange} />
        </div>
        {/* {End of Room Price} */}
        {/* {Size} */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <input
            id="size"
            type="number"
            name="minSize"
            className="size-input"
            value={minSize}
            onChange={handleChange} />
          <input
            id="size"
            type="number"
            name="maxSize"
            className="size-input"
            value={maxSize}
            onChange={handleChange} />
        </div>
        {/* {End of Size} */}
        {/* {Extras} */}
        <div className="form-group">
          <div className="single-extra">
            <input
              id="breakfast"
              type="checkbox"
              name="breakfast"
              checked={breakfast}
              onChange={handleChange} />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              id="pets"
              type="checkbox"
              name="pets"
              checked={pets}
              onChange={handleChange} />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/* {End of Extras} */}
      </form>
    </section>
  )
}
