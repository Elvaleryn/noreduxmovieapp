import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text>
          <FontAwesomeIcon size='2x' icon={faSearch} />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search"
        aria-label="search"
        aria-describedby="basic-addon2"
        style={{ height: '46px' }}
      />
    </InputGroup>

  );
};

/*  <div>
 Filter <input value={filter} onChange={handleFilterChange} />
</div> */

export default Filter;