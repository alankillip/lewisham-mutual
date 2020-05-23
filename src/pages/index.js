import React from "react";
import Helmet from "react-helmet";
import SEO from "../components/SEO";
import Layout from "../layouts/index";

const Home = () => {
  return (
    <Layout bodyClass="page-home">
      <SEO title="Home" />
      <Helmet>
        <meta
          name="description"
          content="Resources for mutual aid volunteers in the Lewisham Area."
        />
      </Helmet>
      <div className="container col-6 pt-md-10">
        <p>
          Hi! Thanks for visiting the Lewisham COVID-19 Mutual Aid group
          website. There are quite a few resources here, so please read this
          first to get the information you need!
        </p>
        <p>
          What is mutual aid? A voluntary reciprocal exchange of resources and
          services for mutual benefit. Based on non-hierarchical principles. We
          want to support each other and not wait for central government to get
          their act together.
        </p>
        <p>
          No one here is doing this for money, nor are we professionals or
          politicians. We're just concerned people who believe in solidarity and
          are doing something about it.
        </p>
        <p>
          Lewisham is really big, so we've organised ourselves around wards, and
          within that polling districts, or even streets.
        </p>
        <p>Wards: Geographical areas that correspond to voting wards.</p>
        <p>
          Polling districts: Geographical areas that are subdivisions of
          individual wards.
        </p>
        <p>
          Local groups: Some people have chosen to organise themselves outside
          of wards, in groups like estates and tenants associations.
        </p>
        <p>
          Reps: Each group should choose a rep who acts a main point of contact
          between their group and the Borough coordination group. You can find
          their information on the relevant tabs.
        </p>
        <p>By area: Lists all the area-specific groups that have formed up.</p>
        <p>
          Leaflet templates: This is where we share templates for leaflets or
          posters so other groups can use them. It also includes resources in
          other common languages in Lewisham.
        </p>
        <p>
          Support local workers/businesses: Ways you can help local workers and
          businesses who might need support.
        </p>
        <p>
          If you are leafleting a street or an area, please fill out this map so
          that we know which places still need doing
        </p>
        <p>
          If you are joining a Whatsapp group, please read our Communication
          Best Practice Guide here!
        </p>
        <p>
          If you are worried about safeguarding, the National Food Service
          delievered this training for us earlier this week
        </p>
      </div>
    </Layout>
  );
};

export default Home;
