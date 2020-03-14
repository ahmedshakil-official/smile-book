import React from 'react';

const Total = (props) => {
    const salarys=props.count;
    console.log(salarys.salary);
    const totalSalary=salarys.reduce((total,newSalary)=>total+parseInt(newSalary.salary),0);
    console.log(totalSalary)
    return (
        <div>
            <h5>Total Salary : ${totalSalary}</h5>
            <button className="btn btn-success">Pay Now</button>
        </div>
    );
};

export default Total;