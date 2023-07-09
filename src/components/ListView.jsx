import React, { useState } from "react";
import { RiFilter3Fill } from "react-icons/ri";
import { HiArrowDown } from "react-icons/hi";
import { BsFillEyeFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";


const ListView = () => {
  const [tickets, setTickets] = useState([
    {
      id: 1,
      taskName: "Talk to Harry",
      linkedTo: "Jivin Mehra",
      status: "Not Started",
      dueDate: "24/10/2022",
      assignedUser: "Shayak",
      text: "+2",

      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&usqp=CAU",
    },
    {
      id: 2,
      taskName: "Make a List of Best Talent",
      linkedTo: "Etasha Gameti",
      status: "Completed",
      dueDate: "24/10/2022",
      assignedUser: "Chatresh",
      text: "+3",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU",
    },
    {
      id: 3,
      taskName: "Need more Candidates",
      linkedTo: "Diksha Bal",
      status: "Cancelled",
      dueDate: "24/10/2022",
      assignedUser: "Ashiya",
      text: "+3",
      src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    },
    {
      id: 4,
      taskName: "Talk to Harry",
      linkedTo: "Tanisha Pandey",
      status: "Started",
      dueDate: "24/10/2022",
      assignedUser: "Ekta",
      text: "+4",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU",
    },
    {
      id: 5,
      taskName: "Interview with Startup",
      linkedTo: "Eksha Bellad",
      status: "Deferred",
      dueDate: "24/10/2022",
      assignedUser: "Laxmi",
      text: "",
      src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    },
    {
      id: 6,
      taskName: "2nd rouund with Dev",
      linkedTo: "Aarin Kamatagi",
      status: "Not Started",
      dueDate: "24/10/2022",
      assignedUser: "Oppilan",
      text: "+3",
      src: "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg",
    },
    {
      id: 7,
      taskName: "Interview with Startup",
      linkedTo: "Saurabh Sen",
      status: "Deferred",
      dueDate: "24/10/2022",
      assignedUser: "Swami",
      text: "",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&usqp=CAU",
    },
    {
      id: 8,
      taskName: "Product Design Assignment",
      linkedTo: "Chanakya Ramesh",
      status: "Completed",
      dueDate: "24/10/2022",
      assignedUser: "Tarak",
      text: "+2",
      src: "https://thumbs.dreamstime.com/b/true-power-comes-realising-your-potential-portrait-confident-young-businessman-working-modern-office-242593128.jpg",
    },
    {
      id: 9,
      taskName: "2nd rouund with Dev",
      linkedTo: "Bhrithi Shan",
      status: "Started",
      dueDate: "24/10/2022",
      assignedUser: "Jiyaan",
      text: "",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    },
    {
      id: 10,
      taskName: "Interview with Startup",
      linkedTo: "Azad Gurazada",
      status: "Deferred",
      dueDate: "24/10/2022",
      assignedUser: "Yaskhit",
      text: "+1",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU",
    },
    {
      id: 11,
      taskName: "2nd rouund with Dev",
      linkedTo: "Aahna Swamy",
      status: "Cancelled",
      dueDate: "24/10/2022",
      assignedUser: "Ahina",
      text: "+5",
      src: "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg",
    },
    {
      id: 12,
      taskName: "Make a List of Best Talent",
      linkedTo: "Lokit Dey",
      status: "Started",
      dueDate: "24/10/2022",
      assignedUser: "Jyothsna",
      text: "",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&usqp=CAU",
    },
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Function to filter the tickets based on the search query
  const filteredTickets = tickets.filter((ticket) =>
    ticket.taskName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination
  const indexOfLastTicket = currentPage * rowsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - rowsPerPage;
  const currentTickets = filteredTickets.slice(
    indexOfFirstTicket,
    indexOfLastTicket
  );

  // Function to handle search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Function to handle rows per page change
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1);
  };

  return (
    <>
      <div className="bg-white mt-4 m-8 rounded-md p-4 ">
        <div className="flex justify-between items-center">
          <h1>56 Task Available </h1>
          <div className="flex gap-2">
            <input
              className="text-xs border rounded-sm px-2  w-[300px]"
              type="text"
              placeholder=" search here anything"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="text-cyan-400 border p-2 rounded-md text-">
              <RiFilter3Fill />
            </button>
          </div>
        </div>

        <table className="mt-4 w-full h-full ">
          <thead className=" text-xl text-center  ">
            <tr>
              <th className="w-[0px]">
                <input className="" type="checkbox" />
              </th>

              <th>
                <div className="flex-row flex items-center gap-1 p-1">
                  TASK NAME <HiArrowDown />
                </div>
              </th>
              <th>
                <div className="flex-row flex items-center gap-1">
                  LINKED TO <HiArrowDown />
                </div>
              </th>
              <th>
                <div className="flex-row flex items-center gap-1">
                  STATUS <HiArrowDown />
                </div>
              </th>
              <th>
                <div className="flex-row flex items-center gap-1">
                  DUE DATE <HiArrowDown />
                </div>
              </th>
              <th>
                <div className="flex-row flex items-center gap-1">
                  ASSIGNED USER <HiArrowDown />
                </div>
              </th>
              <th>
                <div className="flex-row flex items-center gap-1 bg-gray-100 justify-center rounded-t-md py-2 px-2 shadow-2xl">
                  ACTION <HiArrowDown />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-400 ">
            {currentTickets.map((ticket, index) => (
              <tr key={ticket.id} className="text-center">
                <td className="w-[0px]">
                  <input className="" type="checkbox" />
                </td>
                <td>{ticket.taskName}</td>
                <td>{ticket.linkedTo}</td>
                <td
                  className={`text-sm ${
                    index === 0 ||
                    index === 5 ||
                    index === 3 ||
                    index === 8 ||
                    index === 11 ||
                    index === 13
                      ? "text-green-800"
                      : index === 2 || index === 10
                      ? "text-red-500"
                      : index === 1 || index === 7
                      ? "text-[#00D100] "
                      : "text-gray-300 "
                  }`}
                >
                  {ticket.status}
                </td>
                <td>{ticket.dueDate}</td>
                <td>
                  <div className="flex items-center gap-2">
                    <img
                      src={ticket.src}
                      className="relative z-30 inline-block h-5 w-5 rounded-full ring-1 ring-gray-100 object-cover"
                    />
                    {ticket.assignedUser}
                    <div className="text-cyan-400"> {ticket.text}</div>
                  </div>
                </td>
                <td className="bg-gray-100 flex justify-center py-1.5 shadow-2xl">
                  <div className="bg-white w-fit flex justify-center items-center gap-5 p-2 rounded-md">
                    <BsFillEyeFill className="text-yellow-300" />
                    <RiEdit2Fill className="text-blue-700" />
                    <MdDelete className="text-red-600" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 flex justify-end mr-4 gap-4 pr-4">
        <div className="flex gap-2">
          <span>Show rows:</span>
          <select
            className="border border-gray-300 bg-white rounded-md px-1"
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
          >
            <option value={5}>5</option>
            <option value={10}>12</option>
            <option value={20}>20</option>
          </select>
        </div>
        <div className="flex gap-2">
          <>Go to:</>
          <div className="w-7 border border-blue-600 rounded-md px-1  bg-white">
            <input
              className=" border-r border-black w-4 h-4 "
              type=""
              value={currentPage}
              onChange={(event) =>
                handlePageChange(parseInt(event.target.value, 10))
              }
            />
          </div>
        </div>

        <div>
          <span>{`${indexOfFirstTicket + 1}-${Math.min(
            indexOfLastTicket,
            filteredTickets.length
          )} of ${filteredTickets.length}`}</span>
        </div>
        <divb className="flex gap-2">
          <div className=" border border-gray-300 bg-white rounded-md flex px-0.5 ">
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <MdArrowBackIos />
            </button>
          </div>
          <div className=" border border-gray-300 bg-white rounded-md flex px-0.5 ">
            <button
              disabled={
                currentPage === Math.ceil(filteredTickets.length / rowsPerPage)
              }
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <MdArrowForwardIos />
            </button>
          </div>
        </divb>
      </div>
    </>
  );
};

export default ListView;
