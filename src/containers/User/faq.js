import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import UserHeader from "../../hoc/user/header";
import UserFooter from '../../hoc/user/footer';

import '../../assets/css/faq.css';

export default function FAQ() {

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <UserHeader />
      <div className="faq">
        <div className="page-top">
          <div class="page-top-title">
            <p>Frequently Asked Questions</p>
          </div>
        </div>

        <div className="question-answer">
          <div class="content-box">
            <div class="container">
              <div className="g-question">
                <div class="page-title">
                  <p>General Questions</p>
                </div>
                <Accordion elevation={0} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                  <AccordionSummary
                    expandIcon={expanded === 'panel1' ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <p>What is Notes Marketplace?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      Notes Marketplace is an online marketplace for university students to buy and sell their course notes.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion elevation={0} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                  <AccordionSummary
                    expandIcon={expanded === 'panel2' ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <p>What do the university say?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      Notes Marketplace is an online marketplace for university students to buy and sell their course notes.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion elevation={0} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                  <AccordionSummary
                    expandIcon={expanded === 'panel3' ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <p>Is this legal?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      Notes Marketplace is an online marketplace for university students to buy and sell their course notes.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>

              <div className="u-question">
                <div class="page-title">
                  <p>Uploader</p>
                </div>
                <Accordion elevation={0} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                  <AccordionSummary
                    expandIcon={expanded === 'panel4' ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <p>Why should I upload now?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      To maximize sales. We can't sell your notes if they are rotting on your hard drive. Your notes are available for purchase the instant they are approved, which means that you could be missing potential sales as we speak. Despite exam and holiday breaks, our users purchase notes all year round, so the best time to upload notes is always today.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion elevation={0} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                  <AccordionSummary
                    expandIcon={expanded === 'panel5' ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <p>What can't I sell?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      We won't approve materials that have been created by your university or another third party. We also do not accept assignments, essays, practical’s or take-home exams. We love notes though.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion elevation={0} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                  <AccordionSummary
                    expandIcon={expanded === 'panel3' ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <p>How long does it take to upload?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      Uploading notes is quick and easy. It can take as little as 90 seconds per set of notes. Put it this way, in the time it took to read these FAQs, you could’ve uploaded several sets of notes.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>

              <div className="u-question">
                <div class="page-title">
                  <p>Downloader</p>
                </div>
                <Accordion elevation={0} expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                  <AccordionSummary
                    expandIcon={expanded === 'panel7' ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <p>How do I buy notes?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      Search for the notes you are after using the 'SEARCH NOTES' tab at the at the top right of every page. You can then filter results by university, category, course information etc. To purchase, go to detail page of note and click on download button. If notes are free to download – it will download over the browser and if notes are paid, Once Seller will allow download you can have notes at my downloads grid for actual download.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion elevation={0} expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                  <AccordionSummary
                    expandIcon={expanded === 'panel8' ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <p>Why should I buy notes?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      The notes on our site are incredibly useful as an educational tool when used correctly. They effectively demonstrate the techniques that top students employ in order to receive top marks. They also summaries the course in a concise format and show what that student believed were the most important elements of the course. Learn from the best.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion elevation={0} expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                  <AccordionSummary
                    expandIcon={expanded === 'panel9' ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <p>Will downloading notes guarantee I improve my grades?</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      How long is a piece of string? However, 90% of students who purchased notes through our site said that doing so improved their grades.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UserFooter />
    </>
  )
}
