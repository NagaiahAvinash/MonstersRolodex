import './search-box.styles.css';

const SearchBox = ({onChangeHolder})=>(
            <input 
                type='search' 
                placeholder='search monsters' 
                className='search-box' 
                onChange={
                    onChangeHolder
                }
                />
        );
export default SearchBox