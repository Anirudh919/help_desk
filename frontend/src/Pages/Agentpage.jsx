import React from "react";

const tickets = [
  {
    number: "INC5468",
    date: "04/12/23 08:24AM",
    subject: "Can't sign into finance app",
    user: "Marco.27",
    location: "Building7",
    room: "402",
    serviceType: "Software",
    assignedTo: "",
    status: "Unassigned",
    lastUpdate: "None",
  },
  {
    number: "RITM4321",
    date: "04/11/23 10:07AM",
    subject: "Assistance moving desktop computer",
    user: "Miller.5",
    location: "Building2",
    room: "227",
    serviceType: "Equipment",
    assignedTo: "Levinson.2",
    status: "Assigned",
    lastUpdate: "1hr",
  },
  // Add more ticket entries here...
];

const statusColor = {
  Unassigned: "bg-red-200 text-red-800",
  Assigned: "bg-green-200 text-green-800",
  Pending: "bg-yellow-100 text-yellow-700",
  WIP: "bg-blue-100 text-blue-700",
};

const TicketsTable = () => {
  return (
    <div className="p-6 bg-gray-900 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Tickets</h2>
      <table className="w-full text-sm text-left border-collapse">
        <thead className="text-gray-200 bg-gray-900">
          <tr>
            <th className="p-3">Number</th>
            <th className="p-3">Date</th>
            <th className="p-3">Subject</th>
            <th className="p-3">User</th>
            <th className="p-3">Location</th>
            <th className="p-3">Room</th>
            <th className="p-3">Service Type</th>
            <th className="p-3">Assigned To</th>
            <th className="p-3">Status</th>
            <th className="p-3">Last Update</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket, index) => (
            <tr key={index} className="border-t hover:bg-gray-600">
              <td className="p-3">{ticket.number}</td>
              <td className="p-3">{ticket.date}</td>
              <td className="p-3">{ticket.subject}</td>
              <td className="p-3">{ticket.user}</td>
              <td className="p-3">{ticket.location}</td>
              <td className="p-3">{ticket.room}</td>
              <td className="p-3">{ticket.serviceType}</td>
              <td className="p-3">{ticket.assignedTo || "Assign"}</td>
              <td className="p-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor[ticket.status] || "bg-gray-200 text-gray-700"}`}>
                  {ticket.status}
                </span>
              </td>
              <td className="p-3">
                <span className="bg-gray-900 px-2 py-1 rounded-full text-xs">{ticket.lastUpdate}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketsTable;
