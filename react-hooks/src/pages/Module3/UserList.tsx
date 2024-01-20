import React from 'react';

const UserList = ({isLoading,error,data}) => {
    console.log(isLoading,error,data);
    if(isLoading && !error){
        return <div>Loading...</div>
    }
    if(error){
        return <p>Something went wrong</p>
    }
    return (
        <div>
            {
                data?.map(item=> (
                <p key={item.id}>{item.name}</p>
                ))
            }
        </div>      
    );
};

export default UserList;