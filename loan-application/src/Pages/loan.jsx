import React, { useState } from "react";
import Header from "../Components/header.jsx";
import Footer from "../Components/footer.jsx";
import MainImage from "../Assests/MainImage.svg";
import AddImage from "../Assests/AddImage.svg";
import PlusIcon from "../Assests/PlusIcon.svg";
import DatePicker from "react-datepicker";
import "../App.css";
import "react-datepicker/dist/react-datepicker.css";

const FirstElement = () => {
  return (
    <div className="relative">
      <img src={MainImage} className="w-screen" alt="Main Image" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-white text-6xl font-bold mb-8 tracking-wider">
          Loan Application
        </h1>
        <p className="text-white text-lg font-light tracking-widest">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

const NavCard = () => {
  const [activeTab, setActiveTab] = useState("Details About You");
  const [prefix, setPrefix] = useState("");
  const [name, setName] = useState("");
  const [surename, setSurename] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [maritalStatus, setMaritalStatus] = useState({
    married: false,
    deFactor: false,
    single: false,
    other: false,
  });
  const [financialDependents, setFinancialDependents] = useState(0);
  const [licenceNumber, setLicenceNumber] = useState("");
  const [stateofIssue, setStateofIssue] = useState("");
  const [resident, setResident] = useState("");
  const [UScitizen, setUSCitizen] = useState("");
  const [showTaxTextInput, setShowTaxTextInput] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handlePrefixChange = (event) => {
    setPrefix(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSurenameChange = (event) => {
    setSurename(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleMaritalStatusChange = (event) => {
    setMaritalStatus({
      ...maritalStatus,
      [event.target.name]: event.target.checked,
    });
  };

  const handleFinancialDependentsChange = (event) => {
    setFinancialDependents(parseInt(event.target.value, 10));
  };

  const incrementDependents = () => {
    setFinancialDependents((prevValue) => prevValue + 1);
  };

  const decrementDependents = () => {
    setFinancialDependents((prevValue) => Math.max(prevValue - 1, 0));
  };

  const handleResidentChange = (event) => {
    setResident(event.target.value);
   
  };

  const handleUSCitizen = (event) => {
    setUSCitizen(event.target.value);
     // Show the ext input field
     setShowTaxTextInput(
     event.target.value === "Yes"
    );
  }

  const CustomRadioButton = ({ name, value, checked, onChange }) => {
    return (
      <label className="custom-radio">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="hidden-radio"
        />
        <span className="radio-icon"></span>
        {value}
      </label>
    );
  };

  return (
    <div className="mx-44">
      <div className="flex">
        {/* Left Side Card */}
        <div className="w-1/3 bg-white">
          <div className="w-96 bg-white p-7 rounded-md drop-shadow-2xl">
            <ul>
              <li
                className={`cursor-pointer py-4 px-5 flex items-center rounded-md mb-2 drop-shadow-xl hover:bg-dark2 hover:text-[17px] hover:text-white ${
                  activeTab === "Details About You"
                    ? " text-white font-semibold text-base bg-dark1"
                    : "text-label font-bold bg-white "
                }`}
                onClick={() => handleTabClick("Details About You")}
              >
                {activeTab !== "Details About You" && (
                  <img
                    src={PlusIcon}
                    alt="Plus Icon"
                    className="w-5 h-5 mr-5 "
                  />
                )}
                Details About You
              </li>
              <li
                className={`cursor-pointer py-4 px-5 flex items-center rounded-md mb-2 drop-shadow-xl hover:bg-dark2 hover:text-[17px] hover:text-white ${
                  activeTab === "Residential Details"
                    ? "text-white font-semibold text-base bg-dark1"
                    : "text-label font-bold bg-white"
                }`}
                onClick={() => handleTabClick("Residential Details")}
              >
                {activeTab !== "Residential Details" && (
                  <img
                    src={PlusIcon}
                    alt="Plus Icon"
                    className="w-4 h-auto mr-2"
                  />
                )}
                Residential Details
              </li>
              <li
                className={`cursor-pointer py-4 px-5 flex items-center rounded-md mb-2 drop-shadow-xl hover:bg-dark2 hover:text-[17px] hover:text-white ${
                  activeTab === "Contact Details"
                    ? "text-white font-semibold text-base bg-dark1"
                    : "text-label font-bold bg-white"
                }`}
                onClick={() => handleTabClick("Contact Details")}
              >
                {activeTab !== "Contact Details" && (
                  <img
                    src={PlusIcon}
                    alt="Plus Icon"
                    className="w-5 h-5 mr-2"
                  />
                )}
                Contact Details
              </li>
              <li
                className={`cursor-pointer py-4 px-5 flex items-center rounded-md mb-2 drop-shadow-xl hover:bg-dark2 hover:text-[17px] hover:text-white ${
                  activeTab === "Living Arrangements"
                    ? "text-white font-semibold text-base bg-dark1"
                    : "text-label font-bold bg-white"
                }`}
                onClick={() => handleTabClick("Living Arrangements")}
              >
                {activeTab !== "Living Arrangements" && (
                  <img
                    src={PlusIcon}
                    alt="Plus Icon"
                    className="w-5 h-5 mr-2"
                  />
                )}
                Living Arrangements
              </li>
              <li
                className={`cursor-pointer py-4 px-5 flex items-center rounded-md mb-2 drop-shadow-xl hover:bg-dark2 hover:text-[17px] hover:text-white ${
                  activeTab === "Confirmation"
                    ? "text-white font-semibold text-base bg-dark1"
                    : "text-label font-bold bg-white"
                }`}
                onClick={() => handleTabClick("Confirmation")}
              >
                {activeTab !== "Confirmation" && (
                  <img
                    src={PlusIcon}
                    alt="Plus Icon"
                    className="w-5 h-5 mr-2"
                  />
                )}
                Confirmation
              </li>
            </ul>
          </div>

          <div className="w-96 bg-white p-7 mt-3 rounded-md drop-shadow-2xl">
            <h1 className="font-bold text-dark1 text-lg mb-4">
              Policy Questions?
            </h1>
            <p className="text-label font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-label font-normal mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-dark2 text-lg font-bold py-4">Contact Us</p>
            <img src={AddImage} alt="AddImage" />
          </div>
        </div>

        {/* Right Side Card */}
        <div className="w-2/3 bg-white">
          <div className=" bg-white px-7 pt-2 ml-4 rounded-md drop-shadow-2xl flex-grow">
            {/* Render the content based on the activeTab */}
            {activeTab === "Details About You" && (
              <div className="p-4 ">
                <p className="font-bold text-dark1 text-lg">
                  Details About You
                </p>
                <p className="text-dark1 pt-4 font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <form className="flex flex-wrap  mt-5 ustify-center">
                  <div className="w-1/2 pr-3 mb-5">
                    <label
                      htmlFor="prefix"
                      className="text-label font-semibold hover:text-[17px] hover:text-dark1"
                    >
                      Prefix
                    </label>
                    <select
                      id="prefix"
                      className="border-2 rounded-[0.28rem] px-2 py-2 mb-4 mt-3 w-full border-fieldboarder hover:text-[17px] hover:text-dark1 hover:border-dark1 hover:border-[3px]"
                      onChange={(e) => setPrefix(e.target.value)}
                    >
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Ms">Ms</option>
                    </select>
                  </div>

                  <div className="w-1/2 pl-3">
                    <label
                      htmlFor="firstName"
                      className="text-label font-semibold hover:text-[17px] hover:text-dark1"
                    >
                      Given name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="border-2 rounded-[0.28rem] px-2 py-2 mb-4 mt-3 w-full border-fieldboarder hover:text-[17px] hover:text-dark1 hover:border-dark1 hover:border-[3px]"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="w-1/2 pr-3 mb-5">
                    <label
                      htmlFor="firstName"
                      className="text-label font-semibold hover:text-[17px] hover:text-dark1"
                    >
                      Sure name
                    </label>
                    <input
                      type="text"
                      id="sureName"
                      className="border-2 rounded-[0.28rem] px-2 py-2 mb-4 mt-3 w-full border-fieldboarder hover:text-[17px] hover:text-dark1 hover:border-dark1 hover:border-[3px]"
                      onChange={(e) => setSurename(e.target.value)}
                    />
                  </div>

                  <div className="w-1/2 pl-3">
                    <label
                      htmlFor="datepicker"
                      className="text-label font-semibold hover:text-[17px] hover:text-dark1"
                    >
                      Date of Birth
                    </label>
                    <div className="border-2 rounded-[0.28rem] px-2 py-2 mb-4 mt-3 w-full border-fieldboarder hover:text-[17px] hover:text-dark1 hover:border-dark1 hover:border-[3px]">
                      <DatePicker
                        id="datepicker"
                        selected={selectedDate}
                        onChange={handleDateChange}
                      />
                    </div>
                  </div>

                  <div className="w-1/2 pr-3 mb-5">
                    <label
                      htmlFor="firstName"
                      className="text-label font-semibold hover:text-[17px] hover:text-dark1"
                    >
                      Driver's licence number
                    </label>
                    <input
                      type="text"
                      id="LicenceNumber"
                      className="border-2 rounded-[0.28rem] px-2 py-2 mb-4 mt-3 w-full border-fieldboarder hover:text-[17px] hover:text-dark1 hover:border-dark1 hover:border-[3px]"
                      onChange={(e) => setLicenceNumber(e.target.value)}
                    />
                  </div>

                  <div className="w-1/2 pl-3">
                    <label
                      htmlFor="firstName"
                      className="text-label font-semibold hover:text-[17px] hover:text-dark1"
                    >
                      State of issue
                    </label>
                    <input
                      type="text"
                      id="StateofIssue"
                      className="border-2 rounded-[0.28rem] px-2 py-2 mb-4 mt-3 w-full border-fieldboarder hover:text-[17px] hover:text-dark1 hover:border-dark1 hover:border-[3px]"
                      onChange={(e) => setStateofIssue(e.target.value)}
                    />
                  </div>

                  <div className="w-full pr-4 mb-5">
                    <label
                      htmlFor="maritalStatus"
                      className="text-label font-semibold hover:text-[17px] hover:text-dark1"
                    >
                      Marital Status
                    </label>
                    <div className="flex mt-3">
                      <label className="mr-10 custom-checkbox font-semibold text-fieldboarder">
                        <input
                          type="checkbox"
                          name="married"
                          checked={maritalStatus.married}
                          onChange={handleMaritalStatusChange}
                        />
                        Married
                      </label>
                      <label className="mr-10 custom-checkbox">
                        <input
                          type="checkbox"
                          name="defactor"
                          checked={maritalStatus.divorced}
                          onChange={handleMaritalStatusChange}
                        />
                        De facto
                      </label>
                      <label className="mr-10 custom-checkbox">
                        <input
                          type="checkbox"
                          name="Single"
                          checked={maritalStatus.divorced}
                          onChange={handleMaritalStatusChange}
                        />
                        Single
                      </label>
                      <label className="custom-checkbox">
                        <input
                          type="checkbox"
                          name="Other"
                          checked={maritalStatus.widowed}
                          onChange={handleMaritalStatusChange}
                        />
                        Other
                      </label>
                    </div>
                  </div>

                  <div className="w-full pr-2">
                    <label
                      htmlFor="financialDependents"
                      className="text-label font-semibold hover:text-[17px] hover:text-dark1"
                    >
                      Number of Financial Dependents
                    </label>
                    <input
                      type="number"
                      id="financialDependents"
                      className="border-2 rounded-[0.28rem] px-2 py-2 mb-4 mt-3 ml-4 w-14 border-fieldboarder hover:text-[17px] hover:text-dark1 hover:border-dark1 hover:border-[3px]"
                      value={financialDependents}
                      onChange={handleFinancialDependentsChange}
                    />
                  </div>
                </form>
              </div>
            )}
            {activeTab === "Residential Details" && (
              <div className="p-4 ">
                <p className="font-bold text-dark1 text-lg">
                  Residential Details
                </p>
                <p className="text-dark1 pt-4 font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <form className="flex flex-wrap mt-5 justify-center">
                  <div className="w-full pr-3 mb-5">
                    <label
                      htmlFor="prefix"
                      className="text-label font-semibold hover:text-[17px] hover:text-dark1"
                    >
                      Permanent Australian resident
                    </label>
                    <div className="flex">
                      <CustomRadioButton
                        name="resident"
                        value="Yes"
                        checked={resident === "Yes"}
                        onChange={handleResidentChange}
                      />
                      <CustomRadioButton
                        name="resident"
                        value="No"
                        checked={resident === "No"}
                        onChange={handleResidentChange}
                      />
                    </div>
                  </div>

                  <div className="w-full pr-3 mb-5">
                    <label
                      htmlFor="taxResident"
                      className="text-label font-semibold hover:text-[17px] hover:text-dark1"
                    >
                      Are you a U.S. citizen or U.S. resident for tax purposes
                    </label>
                    <div className="flex">
                      <CustomRadioButton
                        name="taxCitizen"
                        value="Yes"
                        checked={UScitizen === "Yes"}
                        onChange={handleUSCitizen}
                      />
                      <CustomRadioButton
                        name="taxCitizen"
                        value="No"
                        checked={UScitizen === "No"}
                        onChange={handleUSCitizen}
                      />
                    </div>
                    {/* Show the text input field if the user selected "Yes" for the specific question */}
                    {showTaxTextInput && (
                      <input
                        type="text"
                        id="taxTextInput"
                        className="border-2 rounded-[0.28rem] px-2 py-2 mb-4 mt-3 w-1/2 border-fieldboarder hover:text-[17px] hover:text-dark1 hover:border-dark1 hover:border-[3px]"
                        placeholder="Tax Input Field"
                      />
                    )}
                  </div>
                </form>
              </div>
            )}
            {activeTab === "Contact Details" && (
              <div className="p-4">Contact Details Form Content</div>
            )}
            {activeTab === "Living Arrangements" && (
              <div className="p-4">Living Arrangements Form Content</div>
            )}
            {activeTab === "Confirmation" && (
              <div className="p-4">Confirmation Form Content</div>
            )}
          </div>

          <div className="flex justify-end mt-5">
            <button className="bg-dark2 text-white font-bold py-3 px-7 rounded-md hover:text-b hover:text-[17px] hover:bg-[#CCD0DC]">
              Next
            </button>
          </div>
        </div>
      </div>

      {/*add card*/}
    </div>
  );
};

function Loan() {
  return (
    <div>
      <Header />
      <FirstElement />
      <NavCard />
      <Footer />
    </div>
  );
}

export default Loan;
