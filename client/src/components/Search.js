import React from "react";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

function Search({handleSearchChange}) {
    return (
        <div>
             <h3>Search for a book:</h3>
            <Form inline style={{justifyContent:"center"}}>
                <FormControl onChange={event => handleSearchChange(event)} type="text" placeholder="Book name" className="search mr-sm-2" />
            </Form>
        </div>
    )
};

export default Search;