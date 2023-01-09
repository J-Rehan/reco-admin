import { stringify } from "query-string";
import axios from "axios";
import config from "./admin/config/config";


axios.defaults.headers.post["Content-Type"] = "application/json";

let { apiUrl } = config;

function getHeaders() {
  let headers = {
    //   Authorization:
    //     "Bearer " +
    //     (process.env.REACT_APP_STATE === "test" ? "test_admin_token" : token),
    //   firebaseid: fireId,
    "x-api-key": "1ab2c3d4e5f61ab2c3d4e5f6",
  };

  return headers;
}

const dataprovider = {
  getList: (resource: string, params: any) => {
    console.log("params", params);
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;

    const query = {
      sort: [field, order],
      index: (page - 1) * perPage,
      limit: perPage,
    };
    const filters = params.filter;

    Object.keys(filters).forEach(
      (key) => filters[key] === undefined && delete filters[key]
    );
    const keys = Object.keys(filters);

    let filterQuery = "";
    for (let i = 0; i < keys.length; i++) {
        filterQuery = filterQuery + "&filter[" + keys[i] + "]=" + filters[keys[i]];
    }
    const url = `${apiUrl}/${resource}/list?${stringify(query)}${filterQuery}`;

    return axios({
      url: url,
      method: "GET",
      headers: getHeaders(),
    })
      .then((json) => ({
        data: json.data.data,
        total: parseInt(json.data.totalCount),
      }))

      .catch((err) => {
        let error = { message: "Error Occurred" };
        if (err.response)
          if (err.response.data)
            if (err.response.data.error) error = err.response.data.error;
            else error = err.response.data;
          else error = err.response;
        else error = err;

        throw error;
      });
  },

  getOne: (resource: string, params: any) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    return axios({
      url: url,
      method: "GET",
      headers: getHeaders(),
    })
      .then((json) => ({
        data: json.data.data,
      }))

      .catch((err) => {
        let error = { message: "Error Occurred" };
        if (err.response)
          if (err.response.data)
            if (err.response.data.error) error = err.response.data.error;
            else error = err.response.data;
          else error = err.response;
        else error = err;

        throw error;
      });
  },

  getMany: (resource: string, params: any) => {
    const query = {
      filter: JSON.stringify({ ids: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    return axios({
      url: url,
      method: "GET",
      headers: getHeaders(),
    })
      .then((json) => ({
        data: json.data.data,
        total: parseInt(json.data.totalCount),
      }))

      .catch((err) => {
        let error = { message: "Error Occurred" };
        if (err.response)
          if (err.response.data)
            if (err.response.data.error) error = err.response.data.error;
            else error = err.response.data;
          else error = err.response;
        else error = err;

        throw error;
      });
  },

  getManyReference: (resource: string, params: any) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    return axios({
      url: url,
      method: "GET",
      headers: getHeaders(),
    })
      .then((json) => ({
        data: json.data.data,
        total: parseInt(json.data.totalCount),
      }))

      .catch((err) => {
        let error = { message: "Error Occurred" };
        if (err.response)
          if (err.response.data)
            if (err.response.data.error) error = err.response.data.error;
            else error = err.response.data;
          else error = err.response;
        else error = err;

        throw error;
      });
  },

  create: (resource: string, params: any) => {
    const url = `${apiUrl}/${resource}`;
    return axios({
      url: url,
      method: "POST",
      headers: getHeaders(),
    })
      .then((json) => ({
        data: json.data.data,
      }))

      .catch((err) => {
        let error = { message: "Error Occurred" };
        if (err.response)
          if (err.response.data)
            if (err.response.data.error) error = err.response.data.error;
            else error = err.response.data;
          else error = err.response;
        else error = err;

        throw error;
      });
  },

  update: (resource: string, params: any) => {
    const url = `${apiUrl}/${resource}`;
    return axios({
      url: url,
      method: "POST",
      headers: getHeaders(),
    })
      .then((json) => ({
        data: json.data.data,
      }))

      .catch((err) => {
        let error = { message: "Error Occurred" };
        if (err.response)
          if (err.response.data)
            if (err.response.data.error) error = err.response.data.error;
            else error = err.response.data;
          else error = err.response;
        else error = err;

        throw error;
      });
  },

  updateMany: (resource: string, params: any) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    return axios({
      url: url,
      method: "PUT",
      headers: getHeaders(),
    })
      .then((json) => ({
        data: json.data.data,
      }))

      .catch((err) => {
        let error = { message: "Error Occurred" };
        if (err.response)
          if (err.response.data)
            if (err.response.data.error) error = err.response.data.error;
            else error = err.response.data;
          else error = err.response;
        else error = err;

        throw error;
      });
  },

  delete: (resource: string, params: any) => {
    const url = `${apiUrl}/${resource}`;
    return axios({
      url: url,
      method: "DELETE",
      headers: getHeaders(),
    })
      .then((json) => ({
        data: json.data.data,
      }))

      .catch((err) => {
        let error = { message: "Error Occurred" };
        if (err.response)
          if (err.response.data)
            if (err.response.data.error) error = err.response.data.error;
            else error = err.response.data;
          else error = err.response;
        else error = err;

        throw error;
      });
  },

  deleteMany: (resource: string, params: any) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    return axios({
      url: url,
      method: "DELETE",
      headers: getHeaders(),
    })
      .then((json) => ({
        data: json.data.data,
      }))

      .catch((err) => {
        let error = { message: "Error Occurred" };
        if (err.response)
          if (err.response.data)
            if (err.response.data.error) error = err.response.data.error;
            else error = err.response.data;
          else error = err.response;
        else error = err;

        throw error;
      });
  },
};

export default dataprovider;
