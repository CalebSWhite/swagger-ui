import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SelectApiPage.css';
import Logo from '../logo.png';
import AppFooter from '../AppFooter/AppFooter';
import SelectApi from '../SelectApi/SelectApi';

function SelectApiPage() {
  const navigate = useNavigate();

  const handleChange = selectedApi => navigate('/' + selectedApi.value);

  return (
    <div>
      <div className="search-wrapper">
        <div>
          <img src={Logo} alt="Swagger Ui" />
          <SelectApi autoFocus="true" onChange={handleChange} />
        </div>
      </div>
      <AppFooter />
    </div>
  );
}

export default SelectApiPage;
