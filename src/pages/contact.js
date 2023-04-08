import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import RecipesList from "../components/RecipesList";
import SEO from "../components/SEO";

const Contact = ({data}) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <SEO title="Contact"/>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              Praxis crucifix umami, butcher vegan pug tonx 8-bit godard
              kickstarter seitan humblebrag cronut. Bitters yes plz thundercats
              kogi deep v polaroid, kitsch pork belly offal williamsburg. Man
              bun wayfarers umami neutral milk hotel, sus jean shorts swag tacos
              literally franzen beard meggings tumblr kitsch. Hot chicken
              affogato truffaut bushwick leggings. Semiotics chambray next level
              kale chips.
            </p>
            <p>
              Flexitarian hexagon mlkshk venmo. Franzen jianbing deep v, salvia
              organic cupping vinyl tumblr ramps twee. Seitan neutral milk hotel
              trust fund direct trade knausgaard, same master cleanse freegan
              listicle glossier ascot butcher vape yr synth. Gatekeep iPhone
              DIY, cloud bread roof party venmo +1 90's vinyl la croix praxis.
              Leggings pop-up palo santo cardigan DSA.
            </p>
            <p>
              Blog pabst banjo celiac bespoke crucifix. Poke lyft snackwave
              umami, put a bird on it sustainable PBR&B. Selvage health goth
              etsy literally jean shorts chartreuse. Same affogato crucifix
              vinyl.
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/mayzlwpb"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
};


export const query = graphql`
  query {
    allContentfulRecipe(
      filter: { featured: { eq: true } }
      sort: { title: ASC }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default Contact;
