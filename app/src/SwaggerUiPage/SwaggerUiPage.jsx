import { useState } from 'react';
import './SwaggerUiPage.css';
import Logo from '../logo.png';
import slugify from 'slugify';
import { Link, useNavigate, useParams } from 'react-router-dom';
import SelectApi from '../SelectApi/SelectApi.jsx';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

function SwaggerUiPage() {
  const navigate = useNavigate();
  const params = useParams();
  const availableApis = window._env_.URLS.map(item => ({
    value: slugify(item.name).toLowerCase(),
    label: item.name,
    url: item.url,
  }));

  const activeApiFromQuery = availableApis.find(element => element.value === params.api);

  let activeApiInit = { url: '' };
  if (activeApiFromQuery) {
    activeApiInit = activeApiFromQuery;
  } else {
    navigate('/');
  }

  const [activeApi, setActiveApi] = useState(activeApiInit);

  const handleChange = selectedApi => {
    setActiveApi(selectedApi);

    navigate('/' + selectedApi.value);
  };

  return (
    <div>
      <header className="Swagger-ui-header">
        <Link to={'/'}>
          <img src={Logo} alt="Swagger Ui" />
        </Link>

        <SelectApi
          className="select"
          value={activeApi}
          onChange={handleChange}
        />
      </header>
      <section className="container__swagger-ui">
        <SwaggerUI url={activeApi.url} />
      </section>
    </div>
  );
}

export default SwaggerUiPage;
