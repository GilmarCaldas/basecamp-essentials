// Packages
import $ from "jquery";

// Models
import { ParsedConfig } from "../models/config";

/**
 * Renders
 */

const renderQuestionsArticleAlert = (parsedConfig: ParsedConfig): void => {
  const style =
    parsedConfig.coloredChatBorder === "true"
      ? "border: 2px solid #d6eace;"
      : "background: #d6eace;";

  $('.chat-line__body:contains("?")').closest(".chat-line__bubble").attr({
    style,
  });
};

const renderGitHubMergedArticleAlert = (parsedConfig: ParsedConfig): void => {
  const style =
    parsedConfig.coloredChatBorder === "true"
      ? "border: 2px solid #bca4e6;"
      : "background: #bca4e6;";

  $('.chat-line__body:contains("merged pull request")')
    .closest(".chat-line__bubble")
    .attr({
      style,
    });
};

const renderGitHubReadyForReviewArticleAlert = (
  parsedConfig: ParsedConfig
): void => {
  const style =
    parsedConfig.coloredChatBorder === "true"
      ? "border: 2px solid #7ed182;"
      : "background: #7ed182;";

  $('.chat-line__body:contains("/pull/")').closest(".chat-line__bubble").attr({
    style,
  });
};

const renderGitHubOpennedPullRequestArticleAlert = (
  parsedConfig: ParsedConfig
): void => {
  const style =
    parsedConfig.coloredChatBorder === "true"
      ? "border: 2px solid #b0b0b0;"
      : "background: #b0b0b0;";

  $('.chat-line__body:contains("opened pull request")')
    .closest(".chat-line__bubble")
    .attr({
      style,
    });
};

export const renderArticleAsAlert = (parsedConfig: ParsedConfig): void => {
  renderQuestionsArticleAlert(parsedConfig);
  renderGitHubMergedArticleAlert(parsedConfig);
  renderGitHubReadyForReviewArticleAlert(parsedConfig);
  renderGitHubOpennedPullRequestArticleAlert(parsedConfig);
};
