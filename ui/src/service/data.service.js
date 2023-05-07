export const getInvitedJobs = async () => {
  try {
    const response = await fetch(`http://localhost:8080?status=new`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getAcceptedJobs = async () => {
  try {
    const response = await fetch(`http://localhost:8080?status=accepted`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const acceptJob = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/${id}/accept`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const declineJob = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/${id}/decline`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
