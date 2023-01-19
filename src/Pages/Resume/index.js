import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../../Components/Particle";
import { AiOutlineDownload } from "react-icons/ai";
import Res from "../../Pdf/devRes2023.pdf";


const Resume = () => {
    

    return (
<div>
			<Container fluid className="resume-section">
				<Particle />
				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Button
						variant="primary"
						href={Res}
						target="_blank"
					>
						<AiOutlineDownload />
						&nbsp;Download Resume
					</Button>
				</Row>

				
				
			</Container>
		</div>

    )
};

export default Resume;