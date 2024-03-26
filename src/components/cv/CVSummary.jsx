import PropTypes from 'prop-types';
function CVSummary({ summary }) {
  return (
    <section className="m-4 mr-2 space-y-1 text-xs font-thin">
      <div className="whitespace-pre-line">{summary}</div>
    </section>
  );
}

CVSummary.propTypes = {
  summary: PropTypes.string.isRequired,
};

export default CVSummary;
