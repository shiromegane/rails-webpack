module FrontendHelper
  def webpack_asset_path(path)
    manifest = JSON.parse(Net::HTTP.get(URI.parse(Settings.webpack.manifest)))
    "#{Settings.webpack.host}#{manifest[path].presence}"
  end

  def vue(name, props = nil)
    Rails.logger.debug(props)
    Rails.logger.debug(JSON.generate(props))
    Rails.logger.debug(props.to_json)
    Rails.logger.debug(props.to_json.html_safe)
    Rails.logger.debug("<vue data-name=\"#{name}\" data-props=\"#{props.to_json}\"></vue>")
    Rails.logger.debug("<vue data-name=\"#{name}\" data-props=\"#{props.to_json}\"></vue>".html_safe)
    # Rails.logger.debug(content_tag(:vue, nil, { 'data-name': name, 'data-props': props.to_json }, false))
    # Rails.logger.debug("<vue data-name=\"#{name}\" data-props=\"#{props.to_json}\"></vue>".html_safe)
    return "<vue data-name=\"#{name}\"></vue>".html_safe if props.blank?
    "<vue data-name=#{name} data-props=#{props.to_json}></vue>".html_safe
  end
end
