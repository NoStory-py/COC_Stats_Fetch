import React from 'react'

const DisplayPlayerInfo = ({data, loading, error}) => {
  return (
    <div className="border-2 md:border-3 border-gray-700 rounded-xl m-4 md:m-8 lg:m-12 p-4 md:p-8 lg:p-12">
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <p className="text-red-500">Error: {error.message}</p>
      ) : data ? (
        <>
          <p className="">Player Tag: {data.tag}</p>
          <p className="">Level: {data.expLevel}</p>
          <p className="">Name: {data.name}</p>
          <p className="">Town Hall: {data.townHallLevel}</p>
          <p className="">League: {data.league?.name}</p>
          <p className="">Trophies: {data.trophies}</p>
          <p className="">Best Trophies: {data.bestTrophies}</p>
          <p className="">Clan Role: {data.role}</p>
          <p className="">War Stars: {data.warStars}</p>
          <p className="">Attack Wins: {data.attackWins}</p>
          <p className="">Defense Wins: {data.defenseWins}</p>
          <br/>
          <p className="">Build Hall: {data.builderHallLevel}</p>
          <p className="">League: {data.builderBaseLeague?.name}</p>
          <p className="">Trophies: {data.builderBaseTrophies}</p>
          <p className="">Best Trophies: {data.bestBuilderBaseTrophies}</p>
     


        </>
      ) : null}
    </div>
  )
}

export default DisplayPlayerInfo
