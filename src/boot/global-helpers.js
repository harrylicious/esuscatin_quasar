const getCurDateTime = function () {
  let date = new Date();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  let dateOfString = (("" + day).length < 2 ? "0" : "") + day + "/";
  dateOfString += (("" + month).length < 2 ? "0" : "") + month + "/";
  dateOfString += date.getFullYear() + " ";
  dateOfString += (("" + date.getHours()).length < 2 ? "0" : "") + date.getHours() + ":"
  dateOfString += date.getMinutes() + ":"
  dateOfString += date.getSeconds()

  return dateOfString;
};



export {getCurDateTime};
