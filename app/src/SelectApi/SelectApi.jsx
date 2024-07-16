import { useState } from 'react';
import Select from 'react-select';
import slugify from 'slugify';

function SelectApi({ autoFocus, onChange, value }) {
  const [availableApis, setAvailableApis] = useState(window._env_.URLS.map(item => ({
    value: slugify(item.name).toLowerCase(),
    label: item.name,
    url: item.url,
  })));

  return (
    <Select
      className="select__api"
      autoFocus={autoFocus}
      value={value}
      onChange={onChange}
      options={availableApis}
      noOptionsMessage={() => 'No api found'}
      placeholder={'Search Api...'}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary: window._env_.THEME_COLOR,
        },
      })}
    />
  );
}

export default SelectApi;
