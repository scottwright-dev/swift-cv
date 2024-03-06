import PropTypes from 'prop-types';

function CVSummary({ summary }) {
  return (
    <section className="ml-4 space-y-1 text-xs font-thin">
      {summary && <div className="flex items-center">{summary}</div>}
    </section>
  );
}

CVSummary.propTypes = {
  summary: PropTypes.string,
};

export default CVSummary;
