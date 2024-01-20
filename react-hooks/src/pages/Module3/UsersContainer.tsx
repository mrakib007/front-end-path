import React, { useEffect, useState } from 'react';
import UserList from './UserList';
import useUsersData from './hooks/useUsersData';

const UsersContainer = () => {
    const {isLoading,error,data} = useUsersData();
    
    const props = {
        isLoading,
        error,
        data    
    }
    
    return (
        <UserList 
       {...props}
        />
    );
};

export default UsersContainer;