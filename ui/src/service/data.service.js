const requestHeaders = {
  "Content-Type": 'application/json',
  "Access-Control-Allow-Origin": '*',
};

const REQUEST_METHOD ={
  GET: 'GET',
  PUT: 'PUT'
}

const DATA_SERVICE_URL = process.env.REACT_APP_DATA_SERVICE_URL;

export const getInvitedJobs = async () => {
  try {
    const response = await fetch(`${DATA_SERVICE_URL}/jobs?status=new`, {
      method: REQUEST_METHOD.GET,
      headers: requestHeaders,
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getAcceptedJobs = async () => {
  try {
    const response = await fetch(`${DATA_SERVICE_URL}/jobs?status=accepted`, {
      method: REQUEST_METHOD.GET,
      headers: requestHeaders,
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const acceptJob = async (id) => {
  try {
    const response = await fetch(`${DATA_SERVICE_URL}/jobs/${id}/accept`, {
      method: REQUEST_METHOD.PUT,
      headers: requestHeaders,
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const declineJob = async (id) => {
  try {
    const response = await fetch(`${DATA_SERVICE_URL}/jobs/${id}/decline`, {
      method: REQUEST_METHOD.PUT,
      headers: requestHeaders,
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
