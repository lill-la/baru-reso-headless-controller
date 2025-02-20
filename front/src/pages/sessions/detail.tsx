import { Grid2, Typography } from "@mui/material";
import { useParams } from "react-router";
import SessionForm from "../../components/SessionForm";
import SessionUserList from "../../components/SessionUserList";

export default function SessionDetail() {
  const { id } = useParams();

  return (
    <Grid2 container spacing={2}>
      {id ? (
        <>
          <Grid2 size={12}>
            <SessionForm sessionId={id} />
          </Grid2>
          <Grid2 size={12}>
            <SessionUserList sessionId={id} />
          </Grid2>
        </>
      ) : (
        <Grid2 size={12}>
          <Typography>NotFound: セッションが見つかりませんでした</Typography>
        </Grid2>
      )}
    </Grid2>
  );
}
