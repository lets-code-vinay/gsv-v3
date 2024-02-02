import React from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import * as classes from "./Footer.module.css";

import Logo from "../../assets/logos/white-logo.png";
import FooterBottom from "../FooterBottom";
import { SOCIAL_MEDIA_LINKS } from "../../configs/SocialMedia";
// import { THEME_COLOR } from "../../Configs/Theme";

const Footer = () => {
  const Navigate = useNavigate();
  return (
    <>
      <Box className={classes["footer"]}>
        <Grid container className={classes["footerBody"]}>
          <Grid item xs={12} sm={6} md={4} lg={3} id="grid">
            <img
              src={Logo}
              alt={"logo of company"}
              className={classes["footerLogo"]}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={3} id="grid">
            <Typography variant={"h4"} className={classes["menuListTitle"]}>
              Menu
            </Typography>
            <Box className={classes["menuList"]}>
              <a href="/contact-us" className={classes["menuListLink"]}>
                <Typography
                  variant={"body1"}
                  className={classes["menuListText"]}
                >
                  About
                </Typography>
              </a>
            </Box>
            <Box className={classes["menuList"]}>
              <a href="/contact-us" className={classes["menuListLink"]}>
                <Typography
                  variant={"body1"}
                  className={classes["menuListText"]}
                >
                  Our Presence
                </Typography>
              </a>
            </Box>
            <Box className={classes["menuList"]}>
              <a href="/contact-us" className={classes["menuListLink"]}>
                <Typography
                  variant={"body1"}
                  className={classes["menuListText"]}
                >
                  Industries
                </Typography>
              </a>
            </Box>
            <Box className={classes["menuList"]}>
              <a href="/contact-us" className={classes["menuListLink"]}>
                <Typography
                  variant={"body1"}
                  className={classes["menuListText"]}
                >
                  Career
                </Typography>
              </a>
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} md={4} lg={3} id="grid">
            <Typography variant={"h4"} className={classes["menuListTitle"]}>
              Support
            </Typography>

            <Box className={classes["menuList"]}>
              <a href="/contact-us" className={classes["menuListLink"]}>
                <Typography
                  variant={"body1"}
                  className={classes["menuListText"]}
                >
                  FAQ
                </Typography>
              </a>
            </Box>
            <Box className={classes["menuList"]}>
              <a href="/contact-us" className={classes["menuListLink"]}>
                <Typography
                  variant={"body1"}
                  className={classes["menuListText"]}
                >
                  Terms & Conditions
                </Typography>
              </a>
            </Box>
            <Box className={classes["menuList"]}>
              <a href="/contact-us" className={classes["menuListLink"]}>
                <Typography
                  variant={"body1"}
                  className={classes["menuListText"]}
                >
                  Privacy Policy
                </Typography>
              </a>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} id="grid">
            <Typography variant={"h4"} className={classes["menuListTitle"]}>
              Contact Us
            </Typography>
            <Typography
              variant={"h6"}
              className={classes["menuListTitleHeadOffice"]}
            >
              Head Office:
            </Typography>

            <Typography
              variant={"body1"}
              className={classes["menuListTextContact"]}
            >
              90B, Delhi - Jaipur Expy, Udyog Vihar, Sector 18, Gurugram,
              Haryana (India) 122008
            </Typography>
            <br />
            <Typography
              variant={"body1"}
              className={classes["menuListTextContact"]}
            >
              Mobile: +91 7065-478-478
            </Typography>
            <Typography
              variant={"body1"}
              className={classes["menuListTextContact"]}
            >
              Phone: +1-646-350-8962(USA)
            </Typography>
            <Typography
              variant={"body1"}
              className={classes["menuListTextContact"]}
            >
              Email: {SOCIAL_MEDIA_LINKS?.email}
            </Typography>

            <Box className={classes["socialMedia"]}>
              <a
                href={SOCIAL_MEDIA_LINKS?.facebook}
                target="blank"
                className={classes["socialIcon"]}
              >
                <FacebookIcon />
              </a>
              <a
                href={SOCIAL_MEDIA_LINKS?.twitter}
                className={classes["socialIcon"]}
              >
                <TwitterIcon />
              </a>
              <a
                href={SOCIAL_MEDIA_LINKS?.instagram}
                className={classes["socialIcon"]}
              >
                <InstagramIcon />
              </a>
              <a
                href={SOCIAL_MEDIA_LINKS?.linked_in}
                target="blank"
                className={classes["socialIcon"]}
              >
                <LinkedInIcon />
              </a>
              <a
                href={SOCIAL_MEDIA_LINKS?.youtube}
                className={classes["socialIcon"]}
              >
                <YouTubeIcon />
              </a>
              <a
                href={`mailto:${SOCIAL_MEDIA_LINKS?.email}`}
                className={classes["socialIcon"]}
              >
                <MailOutlineIcon />
              </a>
            </Box>
          </Grid>
          <Grid container style={{ marginTop: "2%" }}>
            <Grid item xs={12} sm={6} md={4} lg={3} id="grid">
              <Typography variant={"h4"} className={classes["menuListTitle"]}>
                Himachal Pradesh
              </Typography>
              <Typography
                variant={"body1"}
                className={classes["menuListTextContact"]}
                // onClick={() => Navigate('https://maps.app.goo.gl/ZaSy42Fshx8kx4sx5')}
              >
                {/* <Link
                  underLine={'none'}
                  // sx={{  }}
                  color='white'
                  href={`https://www.google.com/maps/place/32%C2%B011'18.4%22N+77%C2%B036'44.3%22E/@34.288816,71.6011555,4.01z/data=!4m4!3m3!8m2!3d32.1884444!4d77.6123056?entry=
                  target="_blank"
                  rel="noopener">
                  Block #24, Set No. 549, Sector-3 New Shimla, Shimla, Himachal
                  Pradesh 171009

                </Link> */}
                Block #24, Set No. 549, Sector-3 New Shimla, Shimla, Himachal
                Pradesh 171009
              </Typography>
              <br />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} id="grid">
              <Typography variant={"h4"} className={classes["menuListTitle"]}>
                Jharkhand
              </Typography>
              <Typography
                variant={"body1"}
                className={classes["menuListTextContact"]}
              >
                199/A, Mandaliya Nagar, Panchwati Garden Lane, Bariatu, Ranchi,
                Jharkhand 834009
              </Typography>
              <br />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} id="grid">
              <Typography variant={"h4"} className={classes["menuListTitle"]}>
                USA
              </Typography>
              <Typography
                variant={"body1"}
                className={classes["menuListTextContact"]}
              >
                Liberty Court, Piscataway, New Jersey, 08854, USA
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} id="grid">
              <Typography variant={"h4"} className={classes["menuListTitle"]}>
                Europe
              </Typography>
              <Typography
                variant={"body1"}
                className={classes["menuListTextContact"]}
              >
                Vredenoord, 1852 WL Heiloo, The Netherlands
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <FooterBottom />
    </>
  );
};

export default Footer;

// const useStyles = makeStyles((theme) => ({
