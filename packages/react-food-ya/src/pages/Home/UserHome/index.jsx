import { AiOutlineSearch } from 'react-icons/ai';
import PropTypes from 'prop-types';
import FormCustome from '../style';
import GridLogin from '../../../components/GridLogin';

function UserHome({ handleChange, searchRestaurant }) {
  return (
    <>
      <FormCustome>
        <div className="divIcon">
          <AiOutlineSearch />
        </div>
        <input
          className="searchInp"
          onChange={handleChange}
          name="dishName"
          placeholder="Que deseas comer hoy?"
          type="text"
        />
        <input
          className="buttonInp"
          onClick={searchRestaurant}
          type="submit"
          value="Busca ya!"
          placeholder="Busca ya!"
        />
      </FormCustome>
      <img
        src="https://live.pystatic.com/webassets/AppscoreWeb/monolith/4.0.42/images/monolith-people-users-search.6494c324.svg"
        alt="Busca un producto"
      />
      <h3 className="sc-xsbquu-1 fnsLFP">Busca en FoodYa</h3>
      <div className="sc-xsbquu-2 dsfBpo">Encuentra lo que buscas de la forma más rápida</div>
      <GridLogin />
    </>
  );
}

UserHome.propTypes = {
  handleChange: PropTypes.func,
  searchRestaurant: PropTypes.func
};

UserHome.defaultProps = {
  handleChange: null,
  searchRestaurant: null
};

export default UserHome;
