import React from "react";

function PopularSearch() {
  return (
    <div>
      <h1 className="ml-14 text-[19px] font-semibold mt-5">Popular Searches</h1>
      <div className="grid grid-cols-4 ">
        <div className="flex flex-col">
          <div>
            <img
              src="https://qph.cf2.quoracdn.net/main-qimg-f44593b01fa869e9124eda042cfbaa19-lq"
              className="w-[250px] h-[250px] ml-14 mb-3 mt-2 rounded-sm "
            />
          </div>
          <div>
            <p className="ml-14 ">Photogallery in Jaipur</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <img
              src="https://cdn.rajwadi.com/image/cache/data/-39844-800x1100.jpg"
              className="w-[250px] h-[250px] ml-14 mb-3 mt-2 rounded-sm "
            />
          </div>
          <div>
            <p className="ml-14 ">Groom Wear in Jaipur</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <img
              src="https://assets.vogue.in/photos/64411b0713d0fd2111a35cf9/master/pass/INDIAN-WEDIDNG-DRESSES-voguebus-story.jpg"
              className="w-[250px] h-[250px] ml-14 mb-3 mt-2 rounded-sm "
            />
          </div>
          <div>
            <p className="ml-14 ">Bridal Wear in Jaipur</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <img
              src="https://image.wedmegood.com/resized/720X/uploads/project/271899/1703466168_image89.jpg?crop=64,869,1630,916"
              className="w-[250px] h-[250px] ml-14 mb-3 mt-2 rounded-sm "
            />
          </div>
          <div>
            <p className="ml-14 ">Bridal Makeup in Jaipur</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularSearch;
