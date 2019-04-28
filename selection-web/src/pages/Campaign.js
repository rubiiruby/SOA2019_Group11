import React, { Fragment } from "react";
import { Segment, Header, Divider, Label } from "semantic-ui-react";
import AppBar from "../components/AppBar";
import withResponsiveWidth from "../containers/withResponsiveWidth";
import { Responsive } from "semantic-ui-react";
import Carousel from "nuka-carousel";
import ChoicesContainer from "../containers/ChoicesContainer";

const imageStyle = {
  maxWidth: "100%",
  width: "auto",
  maxHeight: "300px",
  height: "auto",
  display: "inline-block"
};

const HeaderSection = () => (
  <div style={{ display: "inline-block" }}>
    <Header
      style={{ fontFamily: "arial, helvetica", fontSize: "3em" }}
      as="h1"
      textAlign="left"
    >
      การเลือกตั้งสมาชิกสภาผู้แทนราษฎร
      <Header.Subheader>
        <Label color="blue" style={{ margin: "0.5em 0 0 0" }}>
          Suppasek Manmunkij
          <Label.Detail>Creator</Label.Detail>
        </Label>
      </Header.Subheader>
    </Header>
  </div>
);

const Campaign = props => (
  <Responsive fireOnMount onUpdate={props.updateEvent}>
    <AppBar />

    <Divider hidden section />
    <Segment
      basic
      style={{ margin: props.tablet ? 0 : "0 14em", textAlign: "center" }}
    >
      {!props.mobile && (
        <Fragment>
          <HeaderSection /> <Divider section hidden />
        </Fragment>
      )}

      <Carousel
        renderCenterLeftControls={({ previousSlide }) => null}
        renderCenterRightControls={({ nextSlide }) => null}
        width="80%"
        cellAlign="center"
        heightMode="max"
        initialSlideHeight="500px"
        style={{
          display: "inline-block"
        }}
      >
        <img
          style={imageStyle}
          src="https://dummyimage.com/400x600/000/fff.png"
        />
        <span>
          <img
            style={imageStyle}
            src="https://dummyimage.com/600x400/0011ff/000.png&text=TEST"
          />
        </span>
      </Carousel>
      <Divider hidden />
      {props.mobile && <HeaderSection />}
      <Divider hidden />

      <p style={{ textAlign: "left" }}>
        แตงโมเพอร์ออกไซด์หยอยพรีเมียมสเกลาร์ สเตชั่นไฟแนนซ์ธัญบุรีออสการ์พุทธคยา
        ไฮโดรลิกไฮโดรลิกแอนคฑาทะแยง ออโรรา วอชิงตันคาทอลิค ฟอนต์
        พิษณุโลกซีเทนบางปะกง สเปกโทรสโคปอะมิโน
        ปิรามิดออสการ์เน็ตเวิร์กบรัดเลย์ตราด ซิงค์รูปภาพสเปซเม็กซิโก
        นิสสันอยุธยาทนงอัฟริกาฮุสเซ็น ฃวด หล่ะเตลุคูสเตชั่น
        สิมิลันปาฏิโมกข์อุทัยธานีปูนแดง กระบี่เดนเวอร์คลื่นเหียน
        ฮันกึลยากี้ตัดสินนาลันทาสเปกโทรสโคป เพริศแพร้วซิงค์
        ไฮดรอลิกเจ้าคณะสูญญากาศมะละแหม่งแอคคอร์ด ไพ่ป๊อกเช็กเวิร์คสเตชัน ทิพากร
        ไมเคิลสารนาถ จำวัดมอนิเตอร์อียิปต์หวั่นกลัวยาฮู นครปฐมจำวัด ลันตาซ่องเสพ
        ซีเทนโอ่อวดบล็อกเกอร์อิริยาบท หวาดเกรงพฤษภาคมยูนิเซฟนครราชสีมา
        นาซ่าลำพูนระนองหวาดเกรงมัจจุราช มัลติเซ็กเมนต์เอทานอลหยอมแหยม
        ยูนิโค้ดโอเปอเรเตอร์หนองบัวลำภูโปรเซสเซอร์ บิสเซา หวั่นกลัว
        เทสโก้ลัตเวียธัญบุรีคุรุมุขีปัญจาบี ตัดสินเวก้าแอพพลิเคชันพะเยาทรมาณ
        สุริยจักรวาล จาเมกา
      </p>

      <Divider hidden />
      <ChoicesContainer />
    </Segment>

    <Divider hidden section />
  </Responsive>
);

export default withResponsiveWidth(Campaign);
