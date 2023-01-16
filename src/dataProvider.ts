import { stringify } from "query-string";
import axios from "axios";
import config from "./admin/config/config";
import { FirebaseAuthProvider } from "react-admin-firebase";


const { apiUrl, xApiKey, firebaseConfig } = config;


const authProvider = FirebaseAuthProvider(firebaseConfig, {});
axios.defaults.headers.post["Content-Type"] = "application/json";


function getHeaders(token: string | null) {
  let headers = {
    Authorization:
      "Bearer " +
      (process.env.REACT_APP_STATE === "test" ? "test_admin_token" : token),
    "x-api-key": xApiKey,
  };

  return headers;
}

const dataprovider = {
  getList: async (resource: string, params: any) => {

    const token = await authProvider.getJWTToken();

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
      filterQuery =
        filterQuery + "&filter[" + keys[i] + "]=" + filters[keys[i]];
    }
    const url = `${apiUrl}/${resource}/list?${stringify(query)}${filterQuery}`;

    return axios({
      url: url,
      method: "GET",
      headers: getHeaders(token),
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

  getOne: async (resource: string, params: any) => {
    const token = await authProvider.getJWTToken();

    const url = `${apiUrl}/${resource}/${params.id}`;
    return axios({
      url: url,
      method: "GET",
      headers: getHeaders(token),
    })
      .then((json) => ({
        data: json.data,
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

  // getMany: (resource: string, params: any) => {
  //  console.log( "i m calling refere",resource);

  //   const query = {
  //     filter: JSON.stringify({ ids: params.ids }),
  //   };
  //   const url = `${apiUrl}/${resource}?${stringify(query)}`;
  //   return axios({
  //     url: url,
  //     method: "GET",
  //     headers: getHeaders(),
  //   })
  //     .then((json) => ({
  //       data: json.data.data,
  //       total: parseInt(json.data.totalCount),
  //     }))

  //     .catch((err) => {
  //       let error = { message: "Error Occurred" };
  //       if (err.response)
  //         if (err.response.data)
  //           if (err.response.data.error) error = err.response.data.error;
  //           else error = err.response.data;
  //         else error = err.response;
  //       else error = err;

  //       throw error;
  //     });
  // },

  getMany: async (resource: string, params: any) => {
    const token = await authProvider.getJWTToken();

    const url = `${apiUrl}/${resource}/list`;

    return axios({
      url: url,
      method: "GET",
      headers: getHeaders(token),
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

  getManyReference: async (resource: string, params: any) => {
    const token = await authProvider.getJWTToken();

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
      headers: getHeaders(token),
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

  create: async (resource: string, params: any) => {
    const token = await authProvider.getJWTToken();

    const url = `${apiUrl}/${resource}`;
    return axios({
      url: url,
      method: "POST",
      headers: getHeaders(token),
      data: params.data,
    })
      .then((json) => ({
        data: json.data,
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

  update: async (resource: string, params: any) => {
    const token = await authProvider.getJWTToken();

    const url = `${apiUrl}/${resource}/${params.id}`;
    const updata = {
      ...params.data,
      created_at: undefined,
      updated_at: undefined,
      id: undefined,
      tag_keyname: undefined,
    };
    return axios({
      url: url,
      method: "PATCH",
      headers: getHeaders(token),
      data: updata,
    })
      .then((json) => ({
        data: json.data,
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

  updateMany: async (resource: string, params: any) => {
    const token = await authProvider.getJWTToken();

    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    return axios({
      url: url,
      method: "PUT",
      headers: getHeaders(token),
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

  delete: async (resource: string, params: any) => {
    const token = await authProvider.getJWTToken();

    const url = `${apiUrl}/${resource}`;
    return axios({
      url: url,
      method: "DELETE",
      headers: getHeaders(token),
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

  deleteMany: async (resource: string, params: any) => {
    const token = await authProvider.getJWTToken();

    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    return axios({
      url: url,
      method: "DELETE",
      headers: getHeaders(token),
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
