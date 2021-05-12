import {
  Button,
  Checkbox,
  FormControl,
  Input,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextareaAutosize,
  TextField,
} from "@material-ui/core";
import React, { useMemo, useState } from "react";
import { ContentBlock } from "../../components/ContentBlock/ContentBlock";
import countryData from "../../country_data.json";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import s from "./CreateArticlePage.module.scss";
import { RichEditor } from "./RichEditior";
import { useHistory } from "react-router";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function CreateArticlePage({}) {
  const [counry, setCountry] = useState([]);
  const history = useHistory();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const countryNames = useMemo(() => {
    return Object.values(countryData);
  }, []);

  return (
    <ContentBlock title={"Создание статьи"} className={s.CreateArticlePage}>
      <form className={s.CreateArticlePage__form} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Заголовок" variant="outlined" />
        <RichEditor editorState={editorState} onChange={setEditorState} />
        <FormControl>
          <Select
            multiple
            value={counry}
            onChange={handleChange}
            input={<OutlinedInput id="outlined-basic" variant="outlined" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {countryNames.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={counry.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </form>
      <Button
        className={s.CreateArticlePage__button}
        variant="contained"
        onClick={() => {
          history.push("/blogs");
        }}
      >
        Создать
      </Button>
    </ContentBlock>
  );
}
