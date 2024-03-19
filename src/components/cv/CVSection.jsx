import PropTypes from 'prop-types';

function CVSection({ title, items, renderItem }) {
  return (
    <section className="mb-4 ml-4 space-y-1 text-xs font-thin">
      {items.length > 0 && (
        <>
          <header className="mb-2 flex items-center text-sm font-normal">
            <span className="text-lg">{title}</span>
          </header>
          {items.map((item) => (
            <div key={item.id} className="mb-4">
              {renderItem(item)}
            </div>
          ))}
        </>
      )}
    </section>
  );
}

CVSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderItem: PropTypes.func.isRequired,
};

export default CVSection;
