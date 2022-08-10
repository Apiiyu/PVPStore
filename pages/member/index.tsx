import jwtDecode from 'jwt-decode'
import React from 'react'
import { GetServerSideProps, JWTPayloadTypes, UserTypes } from 'data-types'
import Sidebar from 'components/organisms/General/Sidebar'
import ContentOverview from 'components/organisms/Pages/Member/ContentOverview'

export default function Member() {
  return (
    <>
        <section className="overview overflow-auto">
          <Sidebar activeMenu='overview'/>
          <ContentOverview />
        </section>
    </>
  )
}


