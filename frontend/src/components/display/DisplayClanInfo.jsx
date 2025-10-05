import React from 'react'

const DisplayClanInfo = ({data, loading, error}) => {
  return (
    <div className="border-2 md:border-3 border-gray-700 rounded-xl m-4 md:m-8 lg:m-12 p-4 md:p-8 lg:p-12">
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <p className="text-red-500">Error: {error.message}</p>
      ) : data ? (
        <>
          <p className="">Clan Tag: {data.tag}</p>
          <p className="">Clan Name: {data.name}</p>
          <p className="">Description: {data.description}</p>
          <p className="">Type: {data.type}</p>
          <p className="">Members: {data.members}</p>
          <p className="">Clan Level: {data.clanLevel}</p>
          <p className="">Clan Points: {data.clanPoints}</p>
          <p className="">Clan Builder Base Points: {data.clanBuilderBasePoints}</p>
          <p className="">Clan Capital Points: {data.clanCapitalPoints}</p>

          <p className="">War Frequency: {data.warFrequency}</p>
          <p className="">War Wins: {data.warWins}</p>
          <p className="">War Win Steak: {data.warWinStreak}</p>
        
        </>
      ) : null}
    </div>
  )
}

export default DisplayClanInfo
