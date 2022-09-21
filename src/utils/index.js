const mapDBToModel = ({ id, name, year, created_at, updated_at }) => ({
  id,
  name,
  year: parseInt(year),
  createdAt: created_at,
  updatedAt: updated_at,
});

const mapSongDBToModel = ({
  id,
  title,
  year,
  genre,
  performer,
  duration,
  album_id,
}) => ({
  id:id,
  title:title,
  year: parseInt(year),
  genre,
  performer,
  duration:parseInt(duration),
  albumId: album_id,
});

module.exports = { mapDBToModel, mapSongDBToModel };
