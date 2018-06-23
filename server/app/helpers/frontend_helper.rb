module FrontendHelper
  def webpack_asset_path(path)
    manifest = JSON.parse(Net::HTTP.get(URI.parse(Settings.webpack.manifest)))
    "#{Settings.webpack.host}#{manifest[path].presence}"
  end

  def vue(name, props = nil)
    return "<vue data-name='#{name}'></vue>".html_safe if props.blank?
    "<vue data-name='#{name}' data-props='#{props.to_json}'></vue>".html_safe
  end
end
