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
  const [permenentAussie, setPermenentAussie] = useState("");
  const [showTaxTextInput, setShowTextInput] = useState(false);
  const [showYesInput, setShowYesInput] = useState(false);
  const [showNoInput, setShowNoInput] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [country, setCountry] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [hasTIN, setHasTIN] = useState("");
  const [showInputAndTable, setShowInputAndTable] = useState(false);
  const [tinState, setTinState] = useState("");
  const [explanationState, setexplanation] = useState("");
  const [reasonIfNoTINState, setreasonIfNoTIN] = useState("");
  const [OwnerWithMortgage, setOwnerWithMortgage] = useState("");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handlePrefixChange = (event) => {
    setPrefix(event.target.value);
    setShowDropdown(false);
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
    setShowTextInput(event.target.value === "Yes");
  };

  const handlePermenentAussie = (event) => {
    if (event.target.value === "Yes") {
      setShowInputAndTable(true);
    } else {
      setShowInputAndTable(false);
    }
    setPermenentAussie(event.target.value);

    setShowYesInput(event.target.value === "Yes");
  };

  const handeOwnerWithMortgage = (event) => {
    if (event.target.value === "OwnerWithMortgage") {
      setOwnerWithMortgage(event.target.value);
    } else if (event.target.value === "LivingWithRelatives") {
      setOwnerWithMortgage(event.target.value);
    }
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleAddToTable = () => {
    // Assuming you have other states to manage TIN, Reason if No TIN, and explanation
    const newData = {
      country: selectedCountry,
      tin: tinState,
      reasonIfNoTIN: reasonIfNoTINState,
      explanation: explanationState,
    };
    setTableData((prevData) => [...prevData, newData]);
  };

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

  const CustomDropdownOption = ({ value, selected, onClick }) => {
    return (
      <div
        className={`py-2 px-4 cursor-pointer ${
          selected
            ? "bg-gray-300"
            : "bg-white hover:bg-dark2 rounded-md hover:text-white hover:text-[17px]"
        }`}
        onClick={() => onClick(value)}
      >
        {value}
      </div>
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
                  <div className="w-1/2 pr-3 mb-10">
                    <label
                      htmlFor="prefix"
                      className="text-label font-semibold hover:text-[17px] hover:text-dark1"
                    >
                      Prefix
                    </label>
                    <div
                      id="prefix"
                      className="border-2 rounded-[0.28rem] px-2 py-2  mt-3 w-full border-fieldboarder hover:text-[17px] hover:text-dark1 hover:border-dark1 hover:border-[3px]"
                      onClick={() => setShowDropdown(!showDropdown)}
                    >
                      {prefix || "Select a prefix"}{" "}
                      {/* Display the selected value or a placeholder */}
                    </div>
                    {showDropdown && (
                      <div className="bg-white border-gray-300 rounded-[0.28rem] absolute w-[20.5rem] ">
                        <CustomDropdownOption
                          value="Mr"
                          selected={prefix === "Mr"}
                          onClick={handlePrefixChange}
                        />
                        <CustomDropdownOption
                          value="Mrs"
                          selected={prefix === "Mrs"}
                          onClick={handlePrefixChange}
                        />
                        <CustomDropdownOption
                          value="Miss"
                          selected={prefix === "Miss"}
                          onClick={handlePrefixChange}
                        />
                        <CustomDropdownOption
                          value="Ms"
                          selected={prefix === "Ms"}
                          onClick={handlePrefixChange}
                        />
                      </div>
                    )}
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
                    <div className="flex mt-4">
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
                    <div className="flex mt-4 mb-5">
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
                      <div className="w-1/2">
                        <label
                          htmlFor="TIN"
                          className="text-label font-semibold hover:text-[17px] hover:text-dark1."
                        >
                          Taxpayer Identification Number (TIN)
                        </label>
                        <input
                          type="text"
                          id="TIN"
                          className="border-2 rounded-[0.28rem] px-2 py-2 mb-4 mt-3 w-full border-fieldboarder hover:text-[17px] hover:text-dark1 hover:border-dark1 hover:border-[3px]"
                          placeholder="Taxpayer Identification Number (TIN)"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    )}
                  </div>

                  <div className="w-full pr-3 mb-5">
                    <label
                      htmlFor="prefix"
                      className="text-label font-semibold hover:text-[17px] hover:text-dark1"
                    >
                      Permanent Australian resident
                    </label>
                    <div className="flex mt-4 mb-5">
                      <CustomRadioButton
                        name="PermenentAussie"
                        value="Yes"
                        checked={permenentAussie === "Yes"}
                        onChange={handlePermenentAussie}
                      />
                      <CustomRadioButton
                        name="PermenentAussie"
                        value="No"
                        checked={permenentAussie === "No"}
                        onChange={handlePermenentAussie}
                      />
                    </div>
                    {showYesInput && (
                      <div className="w-1/2 pr-3 mb-10">
                        <label
                          htmlFor="country"
                          className="text-label font-semibold hover:text-[17px] hover:text-dark1"
                        >
                          Country
                        </label>
                        <select
                          id="country"
                          className="border-2 rounded-[0.28rem] px-2 py-2 mb-4 mt-3 w-full border-fieldboarder hover:text-[17px] hover:text-dark1 hover:border-dark1 hover:border-[3px]"
                          onChange={(e) => setPrefix(e.target.value)}
                        >
                          <option value="A">A</option>
                          <option value="B">B</option>
                          <option value="C">C</option>
                        </select>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            )}
            {activeTab === "Contact Details" && (
              <div className="p-4 ">
                <p className="font-bold text-dark1 text-lg">Contact Details</p>
                <p className="text-dark1 pt-4 font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <form className="flex flex-wrap mt-5 justify-center">
                  <div className="w-1/2 pr-3 mb-7">
                    <label
                      for="telNumber"
                      className="text-label font-semibold hover:text-[17px] hover:text-dark1"
                    >
                      Home telephone number
                    </label>
                    <div class="flex items-center border-2 rounded-[0.25rem] mt-3 border-fieldboarder hover:text-[17px] hover:text-dark1 hover:border-dark1 hover:border-[3px]">
                      <span className="inline-block mr-2 font-medium text-fieldboarder p-2 rounded-l-[0.25rem]">
                        +91 |
                      </span>
                      <input
                        type="text"
                        id="telNumber"
                        placeholder="4892001090"
                        class="flex-1 appearance-none focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="w-1/2 pl-3 mb-7">
                    <label
                      htmlFor="email"
                      className="text-label font-semibold hover:text-[17px] hover:text-dark1"
                    >
                      Email address
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="border-2 rounded-[0.28rem] px-2 py-2 mb-4 mt-3 w-full border-fieldboarder hover:text-[17px] hover:text-dark1 hover:border-dark1 hover:border-[3px]"
                      placeholder="Email Address"
                    />
                  </div>

                  <div className="w-1/2 pr-3 mb-10">
                    <label
                      for="telNumber"
                      className="text-label font-semibold hover:text-[17px] hover:text-dark1"
                    >
                      Mobile number
                    </label>
                    <div class="flex items-center border-2 rounded-[0.25rem] mt-3 border-fieldboarder hover:text-[17px] hover:text-dark1 hover:border-dark1 hover:border-[3px]">
                      <span className="inline-block mr-2 font-medium text-fieldboarder p-2 rounded-l-[0.25rem]">
                        +91 |
                      </span>
                      <input
                        type="text"
                        id="telNumber"
                        placeholder="4892001090"
                        class="flex-1 appearance-none focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="w-1/2 pl-3 mb-10">
                    <label
                      for="telNumber"
                      className="text-label font-semibold hover:text-[17px] hover:text-dark1"
                    >
                      Work telephone number
                    </label>
                    <div class="flex items-center border-2 rounded-[0.25rem] mt-3 border-fieldboarder hover:text-[17px] hover:text-dark1 hover:border-dark1 hover:border-[3px]">
                      <span className="inline-block mr-2 font-medium text-fieldboarder p-2 rounded-l-[0.25rem]">
                        +91 |
                      </span>
                      <input
                        type="text"
                        id="telNumber"
                        placeholder="4892001090"
                        class="flex-1 appearance-none focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="w-full mb-10">
                    <label
                      for="homeAddress"
                      className="text-label font-semibold hover:text-[17px] hover:text-dark1"
                    >
                      Home address
                    </label>

                    <div className="flex mt-4">
                      <input
                        type="text"
                        id="sureName"
                        className="border-2 rounded-l-[0.28rem] px-2 py-2 mb-4  w-3/4 border-fieldboarder hover:text-[17px] hover:text-dark1 hover:border-dark1 hover:border-[3px]"
                        placeholder="State"
                      />
                      <input
                        type="text"
                        id="sureName"
                        className="border-2 rounded-r-[0.28rem] px-2 py-2 mb-4 w-1/4 border-fieldboarder hover:text-[17px] hover:text-dark1 hover:border-dark1 hover:border-[3px]"
                        placeholder="Postal Code"
                      />
                    </div>
                  </div>

                  <div className="w-full mb-10">
                    <label
                      for="homeAddress"
                      className="text-label font-semibold hover:text-[17px] hover:text-dark1"
                    >
                      Postal address (If different to above)
                    </label>

                    <div className="flex mt-4">
                      <input
                        type="text"
                        id="sureName"
                        className="border-2 rounded-l-[0.28rem] px-2 py-2 mb-4  w-3/4 border-fieldboarder hover:text-[17px] hover:text-dark1 hover:border-dark1 hover:border-[3px]"
                        placeholder="State"
                      />
                      <input
                        type="text"
                        id="sureName"
                        className="border-2 rounded-r-[0.28rem] px-2 py-2 mb-4 w-1/4 border-fieldboarder hover:text-[17px] hover:text-dark1 hover:border-dark1 hover:border-[3px]"
                        placeholder="Postal Code"
                      />
                    </div>
                  </div>
                </form>
              </div>
            )}
            {activeTab === "Living Arrangements" && (
              <div className="p-4 ">
                <p className="font-bold text-dark1 text-lg">
                  Living Arrangements Form Content
                </p>
                <p className="text-dark1 pt-4 font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <form className="flex flex-wrap mt-5 justify-center">
                  <div className="w-full pr-3 mb-5">
                    <div className="flex mt-4 mb-5">
                      <diiv className="w-1/2">
                        <CustomRadioButton
                          name="OwnerWithMortgage"
                          value="OwnerWithMortgage"
                          checked={OwnerWithMortgage === "OwnerWithMortgage"}
                          onChange={handeOwnerWithMortgage}
                        />
                      </diiv>
                      <diiv className="w-1/2">
                        <CustomRadioButton
                          name="LivingWithRelatives"
                          value="LivingWithRelatives"
                          checked={permenentAussie === "LivingWithRelatives"}
                          onChange={handlePermenentAussie}
                        />
                      </diiv>
                    </div>

                    <div className="flex mt-4 mb-5">
                      <diiv className="w-1/2">
                        <CustomRadioButton
                          name="OwnerWithMortgage"
                          value="OwnerWithMortgage"
                          checked={OwnerWithMortgage === "Renting"}
                          onChange={handeOwnerWithMortgage}
                        />
                      </diiv>
                      <diiv className="w-1/2">
                        <CustomRadioButton
                          name="LivingWithRelatives"
                          value="Living with relatives"
                          checked={permenentAussie === "Boarding"}
                          onChange={handlePermenentAussie}
                        />
                      </diiv>
                    </div>

                    <div className="flex mt-4 mb-5">
                      <diiv className="w-1/2">
                        <CustomRadioButton
                          name="OwnerWithMortgage"
                          value="OwnerWithMortgage"
                          checked={OwnerWithMortgage === "Owner no mortgage"}
                          onChange={handeOwnerWithMortgage}
                        />
                      </diiv>
                      <diiv className="w-1/2">
                        <CustomRadioButton
                          name="LivingWithRelatives"
                          value="Living with relatives"
                          checked={permenentAussie === "Supplied by employer"}
                          onChange={handlePermenentAussie}
                        />
                      </diiv>
                    </div>
                  </div>

                  <div className="w-full mb-7">
                    <label
                      htmlFor="ownerName"
                      className="text-label font-semibold hover:text-[17px] hover:text-dark1"
                    >
                      Name of owner / agent
                    </label>
                    <input
                      type="text"
                      id="ownerName"
                      className="border-2 rounded-[0.28rem] px-2 py-2 mb-4 mt-3 w-full border-fieldboarder hover:text-[17px] hover:text-dark1 hover:border-dark1 hover:border-[3px]"
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name of owner / agent"
                    />
                  </div>

                  <div className="w-1/2 pr-3 mb-10">
                    <label
                      for="telNumber"
                      className="text-label font-semibold hover:text-[17px] hover:text-dark1"
                    >
                      Telephone Number
                    </label>
                    <div class="flex items-center border-2 rounded-[0.25rem] mt-3 border-fieldboarder hover:text-[17px] hover:text-dark1 hover:border-dark1 hover:border-[3px]">
                      <span className="inline-block mr-2 font-medium text-fieldboarder p-2 rounded-l-[0.25rem]">
                        +91 |
                      </span>
                      <input
                        type="text"
                        id="telNumber"
                        placeholder="4892001090"
                        class="flex-1 appearance-none focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="w-1/2 pl-3">
                    <label
                      htmlFor="datepicker"
                      className="text-label font-semibold hover:text-[17px] hover:text-dark1"
                    >
                      When did you move to the above address
                    </label>
                    <div className="border-2 rounded-[0.28rem] px-2 py-2 mb-4 mt-3 w-full border-fieldboarder hover:text-[17px] hover:text-dark1 hover:border-dark1 hover:border-[3px]">
                      <DatePicker
                        id="datepicker"
                        selected={selectedDate}
                        onChange={handleDateChange}
                        placeholderText="Select Date"
                      />
                    </div>
                  </div>

                  <div className="w-full mb-10">
                    <label
                      for="homeAddress"
                      className="text-label font-semibold hover:text-[17px] hover:text-dark1"
                    >
                      Previous home address (If under 3 years at present home)
                    </label>

                    <div className="flex mt-4">
                      <input
                        type="text"
                        id="sureName"
                        className="border-2 rounded-l-[0.28rem] px-2 py-2 mb-4  w-3/4 border-fieldboarder hover:text-[17px] hover:text-dark1 hover:border-dark1 hover:border-[3px]"
                        placeholder="State"
                      />
                      <input
                        type="text"
                        id="sureName"
                        className="border-2 rounded-r-[0.28rem] px-2 py-2 mb-4 w-1/4 border-fieldboarder hover:text-[17px] hover:text-dark1 hover:border-dark1 hover:border-[3px]"
                        placeholder="Postal Code"
                      />
                    </div>
                  </div>
                </form>
              </div>
            )}
            {activeTab === "Confirmation" && (
              <div className="p-4 ">
              <p className="font-bold text-dark1 text-lg">
              Confirmation Form Content
              </p>
              <p className="text-dark1 pt-4 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-dark1 pt-4 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-dark1 pt-4 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              </div>
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
