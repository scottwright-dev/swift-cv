import PropTypes from 'prop-types';
function CVSummary({ summary }) {
  return (
    <section className="m-6 text-xs font-thin">
      <div className="whitespace-pre-line">{summary}</div>
    </section>
  );
}

CVSummary.propTypes = {
  summary: PropTypes.string.isRequired,
};

export default CVSummary;
